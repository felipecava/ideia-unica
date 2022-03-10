export async function getStaticPaths() {
    const apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`);
    const jsonPokemon = await apiPokemon.json();
    const total = jsonPokemon.count;  

    const listPokemon = [];
    for (let index = 0; index < total; index++) {
        listPokemon[index] = {
            params: {
                id: jsonPokemon.results[index].name
            }
        }
    }
    console.log(listPokemon)

    return{
        paths: listPokemon,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    //await delay(5000);
    const apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const jsonPokemon = await apiPokemon.json();   
    const tipo2 = (jsonPokemon.types[1])? jsonPokemon.types[1].type.name :  '';
    return {
        props: {
            numero: jsonPokemon.id, 
            nome: jsonPokemon.name,
            tipo1: jsonPokemon.types[0].type.name,
            tipo2: tipo2,
            altura: jsonPokemon.height,
            peso: jsonPokemon.weight,
            photo: jsonPokemon.sprites.front_default,
            shiny: jsonPokemon.sprites.front_shiny,

        }
    }
}

function Produtos(props) {
    return (
        <div style={{display: 'flex', border: '5px solid #000', flexDirection: 'column', width: '200px', padding: '10px 0'}}>
            <div style={{display: 'flex', 'border-bottom': '5px solid #000', width: '100%'}}>
                <img src={props.photo} alt={props.nome} />
                <img src={props.shiny} alt={props.nome} />
            </div>
            <div style={{'border-bottom': '5px solid #000', padding: '10px'}}><b>Tipo:</b> {props.tipo1} {props.tipo2}</div>
            <div style={{'border-bottom': '5px solid #000', padding: '10px'}}><b>Pokemon:</b> <span>{props.nome}</span></div>
            <div style={{'border-bottom': '5px solid #000', padding: '10px'}}><b>Numero:</b> {props.numero}</div>
            <div style={{'border-bottom': '5px solid #000', padding: '10px'}}><b>Altura:</b> {props.altura}</div>
            <div style={{padding: '10px 10px 0'}}><b>Peso:</b> {props.peso}</div>
        </div>
    )
}

export default Produtos;

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }