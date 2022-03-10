async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscriberResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscriberResponseJson = await subscriberResponse.json();
    const inscritos = subscriberResponseJson.total_subscribers;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toUTCString(),
        inscritos: inscritos,
    })
}

export default tempo;