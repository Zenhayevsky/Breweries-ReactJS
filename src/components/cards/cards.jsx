
import './cards.css';
import excluirImage from '../../images/excluir.png';
import telefone from '../../images/telefone.png';
import tipo from '../../images/tipo.png';
import completo from '../../images/completo.png';

function Cards( props ) {

  return (
    <div className="divCard">
      <div className="headcard">
        <div className="nomeBrewerie">
          <span><b>{props.brewerieName}</b></span>
        </div>
        <div>
          <img className="excluirIcon" src={excluirImage} />
        </div>
      </div>
      <div class="container">
        <div>
          <span>{props.brewerieStreet} </span>
        </div>
        <div>
          <span>{props.brewerieCidade} {props.brewerieState} - {props.brewerieCountry} </span>
        </div>
      </div>
      <table className="tags">
        <tr>
          <td>
            <img src={tipo} />
            <p className="teste">
              {props.brewerieTipo}
            </p>
          </td>
          <td>
            <img src={completo} />
            <p className="teste">
              {props.brewerieCep}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={telefone} />
            <p className="teste">
              {props.brewerieTelefone}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Cards;