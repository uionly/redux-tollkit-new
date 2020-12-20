import React from "react";
import { useDispatch } from "react-redux";

import { createPostAsync } from "./postsSlice";
import { Form, Field } from "react-final-form";
export const NewPost = () => {
  const onSubmit = async (post) => {
    dispatch(createPostAsync(post));
  };

  const required = (value) => (value ? undefined : "Required");
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min
      ? undefined
      : `Should be greater than ${min} characters`;
  const composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add new book</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Title</label>
                  <input
                    className="form-control"
                    {...input}
                    type="text"
                    placeholder="Title"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="categories" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Category</label>
                  <input
                    className="form-control"
                    {...input}
                    type="text"
                    placeholder="Category"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="content"
              validate={composeValidators(required, minValue(18))}
            >
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Content</label>
                  <input
                    className="form-control"
                    {...input}
                    type="text"
                    placeholder="Content"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};
