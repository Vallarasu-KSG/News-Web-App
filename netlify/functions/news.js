exports.handler = async function (event) {
  const category =
    event.queryStringParameters.category || "general";

  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${process.env.GNEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};