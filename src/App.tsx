import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import { CustomButton, WaterMark, SchamasForm, ScrollBar } from "@/lib/main.ts";
import { Typography, Divider, Button } from "@arco-design/web-react";
import { IconSync } from "@arco-design/web-react/icon";
import styled from "styled-components";
import { Form } from "@arco-design/web-react";
import { schemas } from "@/schamas";
import Shadcn from '@/Shadcn.tsx'
import { Toaster } from "@/components/ui/sonner"
import "@/App.less";

const { Title } = Typography;

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>();
  const [form] = Form.useForm();
  const name = Form.useWatch("username", form);

  const testIcon = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <WaterMark
      watermarkObj={{
        text: "❤️ nk-plus",
        // url: reactLogo,
        isGray: true,
      }}
      y={120}
      x={80}
    >
      <div className="App">
        <div className="nk-flex nk-justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="nk-pb-4">nk-plus-components</h1>
        <div className="nk-pb-8">React Modern UI Components</div>
        <CustomButton
          type="primary"
          size={"large"}
          customloading={loading ? 1 : 0}
          customicon={<IconSync spin />}
          text={"Hello, CustomButton"}
          onClick={testIcon}
        />
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: "dotted",
          }}
        />
        <ScrollBar>
          <ScrollBox>
            <Title type="primary" underline heading={6}>
              This is ScrollBar components...
            </Title>
          </ScrollBox>
        </ScrollBar>
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: "dotted",
          }}
        />
        <div className="nk-form">
          <SchamasForm
            className="nk-w-3/5 nk-m-auto"
            form={form}
            rowSpacing={16}
            schemas={schemas}
            labelAlign="left"
            layout={"horizontal"}
            style={{ textAlign: "left" }}
          />
        </div>
        <Button
          type={"outline"}
          onClick={async () => {
            const data = await form.validate();
            console.log(data);
            setFormData(data);
          }}
        >
          获取数据
        </Button>
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: "dotted",
          }}
        />
        username: {name ? `❤️` : null} {formData?.username}, adr:{" "}
        {formData?.address?.label}
      </div>
      <Shadcn />
      <Toaster />
    </WaterMark>
  );
}

const ScrollBox = styled.span`
  width: 550px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
