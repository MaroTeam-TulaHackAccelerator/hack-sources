import { FC } from "react";
import { Button, Form, Input, message } from "antd";
import { useAuthGuard } from "../hooks/useAuthGuard";
import { http } from "../agent/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignIn: FC = () => {
  useAuthGuard();
  const navigate = useNavigate();

  const onFinish = async ({ login, password }: any) => {
    try {
      const response = await http.post("http://127.0.0.1:3000/auth/signin", {
        login,
        password,
      });

      localStorage.setItem("access_token", response.data.access_token);

      navigate("/");
      message.success(`Вы вошли как ${login}`);
    } catch (error) {
      message.error("Произошла непредвиденная ошибка");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Form
        name="basic"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: "30vw" }}
        autoComplete="off"
      >
        <Form.Item
          label="Логин"
          name="login"
          rules={[{ required: true, message: "Поле не должно быть пустым" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Поле не должно быть пустым" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Подтвердить
          </Button>
        </Form.Item>
      </Form>
      <Link style={{ marginTop: 30 }} to={"/signup"}>
        Зарегистрироваться
      </Link>
    </div>
  );
};
