const input1 = document.getElementById('input1')! as HTMLInputElement;
const input2 = document.getElementById('input2')! as HTMLInputElement;
const button = document.getElementById('submit-btn')! as HTMLButtonElement;
const resultDiv = document.getElementsByClassName(
  'result'
)! as HTMLCollectionOf<HTMLElement>;

const addNumbers = (a: number, b: number) => a + b;
const validateNumbers = (a: number, b: number) => {
  if (a === 0 || b === 0) {
    return 'Number Cant be Zero';
  }

  if (!a || !b) {
    return 'Numbers are required';
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Please Enter Numbers';
  }
  return 'correct';
};

button.addEventListener('click', () => {
  if (
    validateNumbers(Number(input1.value), Number(input2.value)) === 'correct'
  ) {
    console.log(
      `${input1.value} + ${input2.value} = ${addNumbers(
        Number(input1.value),
        Number(input2.value)
      )}`
    );

    resultDiv[0].innerHTML += `<p>${input1.value} + ${
      input2.value
    } = ${addNumbers(Number(input1.value), Number(input2.value))}</p>`;
    return;
  }

  alert(validateNumbers(Number(input1.value), Number(input2.value)));
});
