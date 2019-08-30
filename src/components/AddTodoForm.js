import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const initialValues = {
  title: "",
  description: ""
};

const AddTodoSchema = props => {
  return Yup.object().shape({
    title: Yup.string()
      .min(2, "Minimum letters: 2")
      .max(20, "Maximum letters: 20")
      .required("Required")
      .test("is-title-exist", "Title already exists", value =>
        props.checkTitle(value)
      ),
    description: Yup.string()
      .min(2, "Minimum letters: 2")
      .max(50, "Maximum letters: 50")
      .required("Required")
  });
};

// const validate = title => {
//   let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

//   return sleep(2000).then(() => {
//     if (this.props.checkTitle(title)) {
//       return true;
//     }
//     return false;
//   });
// };

const AddTodoForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddTodoSchema(props)}
      onSubmit={(values, { resetForm }) => {
        let { addTodo } = props;
        // alert(JSON.stringify(values));
        addTodo(values);
        resetForm();
      }}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <Form>
          <Field name="title" placeholder="Enter Title" />
          {errors.title && touched.title ? <span>{errors.title}</span> : null}

          <Field name="description" placeholder="Enter Description" />
          {errors.description && touched.description ? (
            <span>{errors.description}</span>
          ) : null}

          <button type="submit" disabled={!isValid || isSubmitting}>
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodoForm;

// class AddTodoForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { input: "" };
//   }

//   handleClick = () => {
//     let { addTodo } = this.props;
//     let input = this.state.input;
//     addTodo(input);
//     this.setState({ input: "" });
//   };

//   handleChange = e => {
//     this.setState({ input: e.target.value });
//   };

//   render() {
//     const { input } = this.state;

//     return (
//       <Formik>
//         <input
//           onChange={this.handleChange}
//           placeholder={"Yo"}
//           value={input}
//         ></input>
//         <button onClick={this.handleClick}>Submit</button>
//       </Formik>
//     );
//   }
// }

// export default AddTodoForm;
