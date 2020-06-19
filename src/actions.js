 const dec = () => {
    return {type: 'DEC'};
  }
  const inc = () => {
    return {type: 'INC'};
  }
  const rnd = (payload) => {
    return {type: 'RND', payload};
  }

  export {dec, inc, rnd};