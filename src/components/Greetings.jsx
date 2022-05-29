import './Greetings.css';

const Greetings = (props) => {
  let greeting = 'Hello';
  switch (props.lang) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
  }

  return (
    <div className="greetings">
      {greeting} {props.children}
    </div>
  );
};

export default Greetings;
