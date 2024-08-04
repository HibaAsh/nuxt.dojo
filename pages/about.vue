<template>
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam earum deleniti architecto, dolorem dolores perferendis numquam nihil explicabo eaque nam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam earum deleniti architecto, dolorem dolores perferendis numquam nihil explicabo eaque nam.</p>
      <div>
        {{ data }}
      </div>
    </div>
  </template>
  
  <script setup>
  // const { data } = await useFetch('/api/ninja?name=hiba', {
  //   method: 'post',
  //   body: {
  //     age: 26
  //   }
  // })

  // const { data } = await useFetch('api/ninja')
  const { data } = await useFetch('api/currency/GBP')
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  
  p {
    margin: 20px 0;
  }
  </style>