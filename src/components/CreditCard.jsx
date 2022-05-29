import './CreditCard.css';
import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/master-card.svg';

const CreditCard = (props) => {
  const lastFourNumbers = props.number.slice(props.number.length - 4);
  const censoredNumber = `•••• •••• •••• ${lastFourNumbers}`;
  const typeSourcePath = props.type === 'Visa' ? visaLogo : masterCardLogo;
  const formatedExpirationMonth =
    props.expirationMonth < 10
      ? `0${props.expirationMonth}`
      : props.expirationMonth;

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <img src={typeSourcePath} alt={props.type} width={32} />
      <h4>{censoredNumber}</h4>
      Expires {formatedExpirationMonth}/{props.expirationYear - 2000}{' '}
      {props.bank}
      <br></br>
      {props.owner}
    </div>
  );
};

export default CreditCard;
