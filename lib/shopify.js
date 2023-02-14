export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data',
    };
  }
}

export async function getAllProducts(id) {
  return shopifyFetch({
    query: `{
        products(sortKey: TITLE, first: 100) {
          edges{
            node {
              id
              handle
              title
              description
              images(first: 5) {
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                }
                edges {
                    node {
                    originalSrc
                    altText
                    width
                    height
                    }
                }
              }
              variants(first: 5) {
                edges {
                    node {
                        id
                        priceV2 {
                            amount
                            currencyCode
                        }
                    }
                }
            }
            }
          }
        }
      }`,
  });
}

export async function getProduct(handle) {
  return shopifyFetch({
    query: `
    query getProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        images(first: 5) {
          pageInfo {
              hasNextPage
              hasPreviousPage
          }
          edges {
              node {
              originalSrc
              altText
              width
              height
              }
          }
        }
        variants(first: 5) {
          edges {
            node {
              quantityAvailable
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }`,
    variables: {
      handle,
    },
  });
}
