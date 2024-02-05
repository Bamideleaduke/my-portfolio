import React, { createContext, useState, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../../languages/es-MX.json";
import English from "../../languages/en-US.json";
import India from "../../languages/en-IN.json";

interface ContextProps {
  locale: string;
  selectLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Context = createContext<ContextProps>({
  locale: "",
  selectLang: () => {},
});

const local = navigator.language;
let lang: {
  "app.header": string;
  "app.content": string;
  "app.channel.plug": string;
  greeting: string;
  farewell: string;
  welcome: string;
  dateMessage: string;
  currencyMessage: string;
} ;
if (local === "en.MX") {
  lang = Spanish;
} else if (local === "en.IN") {
  lang = India;
} else {
  lang = English;
}

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLang(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    setLocale(newLocale);

    if (newLocale === "es-MX") {
      setMessages(Spanish);
    } else if (newLocale === "en-IN") {
      setMessages(India);
    } else {
      setMessages(English);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;