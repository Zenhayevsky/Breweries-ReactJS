
import './cards.css';
import excluirImage from '../../images/excluir.png';
import telefone from '../../images/telefone.png';
import tipo from '../../images/tipo.png';
import completo from '../../images/completo.png';

function Cards( props ) {

  let nome = props.brewerie.name;
  let cep = props.brewerie.postal_code;
  let phone = props.brewerie.phone;
  let street = props.brewerie.street;
  let city = props.brewerie.city;
  let country = props.brewerie.country;
  let type = props.brewerie.brewery_type;
  let state = props.brewerie.state;

  return (
    <div className="divCard">
      <div className="headcard">
        <div className="nomeBrewerie">
          <span><b>{nome}</b></span>
        </div>
        <div>
          <img className="excluirIcon" src={excluirImage} />
          <button className="btnExcluir"></button>
        </div>
      </div>
      <div>
        <div className="ruabrewerie">
          <span>{street} </span>
        </div>
        <div className="ruabrewerie">
          <span  >{city} {state} - {country} </span>
        </div>
      </div>
      <table className="tags">
        <tr>
          <td>
            <img src={tipo} />
            <p className="teste">
              {type}
            </p>
          </td>
          <td>
            <img src={completo} />
            <p className="teste">
              {cep}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={telefone} />
            <p className="teste">
              {phone}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Cards;