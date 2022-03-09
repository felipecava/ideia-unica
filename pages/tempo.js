function Tempo(props) {
    console.log("Front")
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log("Servidor")
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();

    return {
        props: {
            staticDateString        
        },
        revalidate: 1
    }
}

export default Tempo;