import { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext"; // 引入LanguageContext
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  const { texts } = useContext(LanguageContext); // 使用LanguageContext

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>{texts.submit}</Button>
    </Form>
  )
}

export default ReviewForm;
