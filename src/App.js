import { Button, Paper, TextField, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [res, setRes] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        Тест на совместимость
        <Paper sx={{width:"560px", padding: 5, display: "flex", flexDirection: "column" }}>
          <Typography>Введите любимый сок</Typography>
          <TextField></TextField>
          <Typography>Введите любимый цвет</Typography>
          <TextField></TextField>
          <Typography>Введите любимый жанр музыки</Typography>
          <TextField></TextField>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => {
              setRes("Загрузка...")
              setTimeout(() => {
                setRes("Совместимость 100%")
              }, 5000);
            }}
          >
            Проверить
          </Button>
          <Typography variant="h3">{res}</Typography>
        </Paper>
      </header>
    </div>
  );
}

export default App;
