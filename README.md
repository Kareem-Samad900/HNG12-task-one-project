# Number Classification API

## Project Description

The project involves development of a RESTFUL API that receives numbers as a query parameter, classifies the number and returns a JSON response.

### Number classification

- **Prime number**: Checks whether the number is a prime number and returns true or false. A prime number is a number that is only divisible by 1 and itself.
- **Perfect number**: Checks whether the number is a perfect number and returns True or False. A perfect number is that number that the sum of its proper divisors is equal to the number itself.
- **Properties**: Checks whether the number is an armstrong number, an odd or even number and then returns an array of the number propertis.

  - _Armstrong number_ is a number whose sum of its digits raise o power the number of the digits is equal to the value of the number.
  - _Even number_ is a number that is divisible by 2 without a remainder.
  - _Odd number_ is a number that is not divisible by 2 without a remainder.

- **Sum of Digits**: return the sum of all the digits
- **Fun-fact**: it send a get request to an external api and return a fun-fact of the number

## Technologies used

- Node.js
- Express.js
- Cors

## Example Usage

```text
 Request

 GET <my-domain.com>/api/classify-number?number=371
```

### JSON Response Format

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Setup

1. Clone the repository
  ```
   git clone https://github.com/Kareem.Samad900/hng-task-one-project.git
```

2. Create an express server
 ```
  npm install -y
```

3. Install dependencies
```
   npm install
```

4. Start the server
```
   npm start
```

## API documentation

#### - GET request

#### - API url

> [my-domain.com/api/classify-numbernumber=345](my-domain.com/api/classify-numbernumber=345)

#### - Json response

## Backlinks

> #### [Stage-one-task](https://hng12.slack.com/archives/C08B3UKM0QN)

> #### [Backend Track](https://hng12.slack.com/archives/C088XGSSWVC)
