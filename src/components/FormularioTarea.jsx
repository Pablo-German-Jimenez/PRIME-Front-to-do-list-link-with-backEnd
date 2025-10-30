import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getTasks } from "../helpers/queries";

const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [tarea, setTarea] = useState([]);

  useEffect(() => {
    obtainTask(), [];
  });

  const obtainTask = async () => {
    const response = await getTasks();
    if (response.status === 200) {
      
      const data = await response.json();
      console.log(data);
      //setTarea(data);
      
    }
  };

  const onSubmit = (data) => {
    console.log(data.tarea);
    setTarea([...tarea, data.tarea]);
    reset();
  };

  const borrarTarea = (nombreTarea) => {
    const tareaFiltradas = tarea.filter(
      (itemTarea) => itemTarea !== nombreTarea
    );
    setTarea(tareaFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="mb-3 d-flex justify-content-between align-items-center"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Enter your task"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: `Ingresar mas de 2 caracteres`,
              },
              maxLength: {
                value: 50,
                message: `Máximo hasta 50 caracteres`,
              },
            })}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTarea tareasProps={tarea} borrarTarea={borrarTarea}></ListaTarea>
    </section>
  );
};

export default FormularioTarea;
