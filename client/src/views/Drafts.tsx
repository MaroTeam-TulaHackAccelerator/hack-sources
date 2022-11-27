import { Button, message } from "antd";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "../agent/axios";
import { usePrivateGuard } from "../hooks/usePrivateGuard";

export const Drafts: FC = () => {
  usePrivateGuard();
  const [projects, setProjects] = useState<any>([
    { roomId: "testtesttse1", userId: "testuser" },
    { roomId: "testtesttse2", userId: "testuser" },
    { roomId: "testtesttse3", userId: "testuser" },
    { roomId: "testtesttse4", userId: "testuser" },
    { roomId: "testtesttse5", userId: "testuser" },
    { roomId: "testtesttse6", userId: "testuser" },
    { roomId: "testtesttse7", userId: "testuser" },
  ]);
  const navigate = useNavigate();

  const handleProjectClickClosure = (id: string) => () => {
    navigate(`/project/${id}`);
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await http.get("http://127.0.0.1:3000/getprojects");

  //       setProjects(response.data);
  //     } catch (error) {
  //       message.error("Произошла непредвиденная ошибка");
  //     }
  //   })();
  // }, []);

  return (
    <div style={{ padding: 20 }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Ваши последние проекты:</h1>
        <Button
          onClick={() => {
            localStorage.removeItem("access_token");
            navigate("/signin");
          }}
          type="primary"
        >
          Выйти
        </Button>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          marginTop: 40,
        }}
      >
        {projects.map(({ roomId, userId }: { roomId: any; userId: any }) => (
          <div
            style={{ padding: 15, cursor: "pointer" }}
            key={roomId}
            onClick={handleProjectClickClosure(roomId)}
          >
            <h3>{roomId}</h3>
            <p>Создатель комнаты: {userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
