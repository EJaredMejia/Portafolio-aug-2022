import { useEffect, useState } from "react";

type TypingAnimationState = {
  state: "traverse" | "reverse" | "complete";
  currentIndex: number;
  currentTextIndex: number;
};

type TypingAnimationProps = {
  text: string[];
  speed?: number;
  delay?: number;
};
export const TypingAnimation = ({
  text,
  speed = 100,
  delay = 2500,
}: TypingAnimationProps) => {
  const [state, setState] = useState<TypingAnimationState>({
    currentIndex: text[0].length,
    state: "complete",
    currentTextIndex: 0,
  });

  function nextText() {
    setState((prevState) => {
      const currentTextIndex = prevState.currentTextIndex;

      const isLastText = currentTextIndex === text.length - 1;
      return {
        ...prevState,
        // if last begin again from first
        currentTextIndex: isLastText ? 0 : currentTextIndex + 1,
      };
    });
  }

  function changeState(newState: TypingAnimationState["state"]) {
    setState((prevState) => ({
      ...prevState,
      state: newState,
    }));
  }

  function addIndex() {
    setState((prevState) => ({
      ...prevState,
      currentIndex: prevState.currentIndex + 1,
    }));
  }

  function substractIndex() {
    setState((prevState) => ({
      ...prevState,
      currentIndex: prevState.currentIndex - 1,
    }));
  }

  function waitForNext() {
    return setTimeout(() => {
      changeState("reverse");
    }, delay);
  }

  function traverseText() {
    if (state.currentIndex >= text[state.currentTextIndex].length) {
      changeState("complete");
      return;
    }

    changeState("traverse");
    return setTimeout(() => {
      addIndex();
    }, speed);
  }

  function reverseText() {
    if (state.currentIndex <= 0) {
      // on reverse inmediate begin to traverse
      changeState("traverse");
      nextText();
      return;
    }

    changeState("reverse");
    return setTimeout(() => {
      substractIndex();
    }, speed);
  }

  useEffect(() => {
    const strategy = {
      complete: waitForNext,
      traverse: traverseText,
      reverse: reverseText,
    };

    const timer = strategy[state.state]();

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, state.currentIndex, state.state]);

  return (
    <span className="text-4xl leading-10 font-semibold tracking-wider">
      {text[state.currentTextIndex].slice(0, state.currentIndex)}
      <span className="inline-block animate-blink-opacity">|</span>
    </span>
  );
};
