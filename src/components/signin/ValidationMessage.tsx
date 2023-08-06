type ValidationMessageProps = {
  message: string;
};

const ValidationMessage = ({ message }: ValidationMessageProps) => {
  return <div className="invalid_message">{message}</div>;
};

export default ValidationMessage;
