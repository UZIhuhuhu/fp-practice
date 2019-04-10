// import * as compose from './compose';

interface IString {
  (x: string): string;
}

const compose = (...funcs) => data =>
  funcs.reduceRight((data, x) => x(data), data);

const double: IString = x => x.repeat(2);

const scan = initial => x => (initial += x);

const MESSAGE = `WYNNXIN`;

function createMessageStream(message, time) {
  return {
    pipe(...pipeFunc) {
      const operate = compose(...pipeFunc);
      // return operate(message);
      return {
        subscribe(...subScribeFunc) {
          subScribeFunc.forEach(func => {
            func(operate(message));
          });
        }
      };
    },
    subscribe(...subScribeFunc) {
      this.pipe().subscribe(...subScribeFunc);
    }
  };
}

const eachLetterSpeackTwice = createMessageStream(MESSAGE, 300) // Stream
  .pipe(
    // handler pipeline
    double,
    scan(`Let me say something: `)
  );

eachLetterSpeackTwice.subscribe(x => console.log(x));
