import { enqueueSnackbar } from "notistack";
import { FormState } from "react-hook-form";

interface fields {
  name: string,
  userMessage: string
}

interface ErrorCard {
  title: string,
  userMessage: string,
  fields: fields[]
}

export function CardError(props: ErrorCard | string | FormState<any>) {

  if (typeof props === "string") {
    return (enqueueSnackbar(
      <div>
        <p>{props}</p>
      </div>,
      { variant: "error", anchorOrigin: { vertical: 'top', horizontal: 'right' } }
    ))
  } else if ('title' in props && 'userMessage' in props && 'fields' in props) {
    return (
      props.fields != null ? (
        enqueueSnackbar(
          <div>
            <h3>{props.title}</h3>
            {props.fields.map((field: any) => (
              <p><strong>{field.name}: </strong> {field.userMessage}</p>
            ))}
          </div>,
          { variant: "error", anchorOrigin: { vertical: 'top', horizontal: 'right' } }
        )) : (
        enqueueSnackbar(
          <div>
            <p>{props.userMessage}</p>
          </div>,
          { variant: "error", anchorOrigin: { vertical: 'top', horizontal: 'right' } }
        ))
    )
  } else if (typeof props === "object" && props !== null) {
      const values = props as { [key: string]: any } // Converte props para um objeto com índices de string
      const fields = Object.keys(values) // Obtém todas as chaves do objeto props
      
      console.log(fields)
      return (
          enqueueSnackbar(
              <div>
                {fields.map((key: string) => (
                  <p key={key}><strong>{key}: </strong> {values[key]}</p>
                ))}
              </div>,
              { variant: "error", anchorOrigin: { vertical: 'top', horizontal: 'right' } }
            )
        )
      }
} 