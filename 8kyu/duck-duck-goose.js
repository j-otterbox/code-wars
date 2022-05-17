const duckDuckGoose = (p, g) => p[(g % p.length || p.length) - 1].name;
