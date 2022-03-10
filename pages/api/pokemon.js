async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscriberResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const subscriberResponseJson = await subscriberResponse.json();
    const inscritos = subscriberResponseJson.count;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toUTCString(),
        inscritos: inscritos,
    })
    
}

export default tempo;