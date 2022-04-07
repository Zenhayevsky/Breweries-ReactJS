
import './cards.css';
import excluirImage from '../../images/excluir.png';
import telefone from '../../images/telefone.png';
import tipo from '../../images/tipo.png';
import completo from '../../images/completo.png';

function Cards( props ) {

  const nomecompleto = props.brewerie.name;
  const cep = props.brewerie.postal_code;
  const phone = props.brewerie.phone;
  const street = props.brewerie.street;
  const city = props.brewerie.city;
  const country = props.brewerie.country;
  const type = props.brewerie.brewery_type;
  const state = props.brewerie.state;

  const nomeformatado = [];
  for (let i =0; i <26; i++) {
    nomeformatado.push(nomecompleto[i])
  }

  return (
    <div className="divCard">
      <div className="headcard">
        <div className="nomeBrewerie">
          <span><b>{nomeformatado}</b></span>
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