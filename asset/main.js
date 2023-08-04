const URL = 'https://nigerianbanks.xyz/';
const container = document.querySelector('.container');
const spinner = document.querySelector('.spinner');

const btn = document.querySelector('button');




const toggleStyle = () => {
  container.classList.add('show');
  spinner.classList.add('hide');
};
async function getBanks(url) {
  const fetching = await fetch(url);
  const fetched = await fetching.json();
  console.log(fetched);
  if (fetching.status >= 200 || fetching.status < 299) {
    toggleStyle();
    const parent = document.querySelector('.parent');
    fetched.map((a) => {
      const innerParent = document.createElement('div');
      const ussd = document.createElement('p');
      const name = document.createElement('h4');
      const image = document.createElement('img');
      image.src = a.logo;
      name.textContent = a.name;
      if (a.ussd == '') {
        ussd.textContent = 'USSD Code not Available...';
      } else {
        ussd.textContent = a.ussd;
      }

      innerParent.appendChild(image);
      innerParent.appendChild(name);
      innerParent.appendChild(ussd);

      parent.appendChild(innerParent);

      image.classList.add('image');
      ussd.classList.add('code');
      name.classList.add('name');
      innerParent.classList.add('inner-parent');
    });
  }
}



setTimeout(() => {
  getBanks(URL);
}, 2000);
