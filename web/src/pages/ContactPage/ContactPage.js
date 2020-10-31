import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label errorClassName="error" name="name" />
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ color: 'red' }} name="name" />

        <Label errorClassName="error" name="email" />
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true, pattern: { value: /[^@]+@[^.]+\..+/ } }}
        />
        <FieldError style={{ color: 'red' }} name="email" />

        <Label errorClassName="error" name="message" />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ display: 'block', color: 'red' }} name="message" />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
