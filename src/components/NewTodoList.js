import React, { Component } from "react";
import { InputGroup, Tag, Button } from "@blueprintjs/core";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import cx from "classnames";

const StyledButton = styled(Button)`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: rgb(118, 135, 148);
`;

const AddTodoSchema = props => {
  return Yup.object().shape({
    title: Yup.string()
      .min(2, "Minimum letters: 2")
      .max(20, "Maximum letters: 20")
      .required("Required")
      .test("is-title-exist", "Title already exists", value =>
        props.checkTitle(value)
      )
  });
};

const initialValues = {
  title: ""
};
class NewTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { addListFormVisible: false };
  }
  render() {
    const { onAdd } = this.props;
    return !this.state.addListFormVisible ? (
      <StyledButton
        onClick={() => this.setState({ addListFormVisible: true })}
        minimal
        icon={"add"}
      ></StyledButton>
    ) : (
      <Formik
        initialValues={initialValues}
        validationSchema={AddTodoSchema(this.props)}
        onSubmit={(values, { resetForm }) => {
          onAdd(values.title);
          resetForm();
          this.setState({ addListFormVisible: false });
        }}
      >
        {({ errors, touched, isSubmitting, isValid }) => (
          <StyledForm>
            <Field name="title">
              {({ field, form }) => (
                <InputGroup
                  className="todo-input"
                  {...field}
                  type="text"
                  placeholder="Enter Title"
                  rightElement={
                    <Tag
                      className={cx(
                        `bp3-minimal`,
                        `bp3-intent-${
                          errors.title && touched.title ? "danger" : "success"
                        }`
                      )}
                      icon={errors.title && touched.title ? "cross" : "circle"}
                    >
                      {errors.title && touched.title ? errors.title : null}
                    </Tag>
                  }
                />
              )}
            </Field>
            <Button minimal type="submit" disabled={!isValid || isSubmitting}>
              Add
            </Button>
          </StyledForm>
        )}
      </Formik>
    );
  }
}

export default NewTodoList;
