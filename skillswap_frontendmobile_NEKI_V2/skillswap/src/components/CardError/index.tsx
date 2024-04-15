// import { enqueueSnackbar } from "notistack";
import { FormState } from "react-hook-form";
import { Alert } from "react-native";
// import { toast } from "sonner";

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
  let alertaString = ``
  
  if (typeof props === "string") {
    // return (Alert.alert(
    //   <div>
    //     <p>{props}</p>
    //   </div>
    // ))
  } else if ('title' in props && 'userMessage' in props && 'fields' in props) {
    return (
      props.fields != null ? (
      alertaString = `${props.title}\n`,
      props.fields.forEach(field => {
      alertaString += `${field.name}: ${field.userMessage}\n`;
      Alert.alert(alertaString)
    })
      // props.fields != null ? (
      //   Alert.alert(
      //     <div>
      //       <h3>{props.title}</h3>
      //       {props.fields.map((field: any) => (
      //         <p><strong>{field.name}: </strong> {field.userMessage}</p>
      //       ))}
      //     </div>
        ) : (
          // alertaString = {props.userMessage}
          Alert.alert(`${props.userMessage}`)
          // toast.error(
          // <div>
          //   <p>{props.userMessage}</p>
          // </div>
          
        )
    )
    
  } else if (typeof props === "object" && props !== null) {
      const values = props as { [key: string]: any }
      const fields = Object.keys(values)
      
      console.log(fields)
      return (
        // toast.error(
        //       <div>
        //         {fields.map((key: string) => (
        //           <p key={key}><strong>{key}: </strong> {values[key]}</p>
        //         ))}
        //       </div>,
        //     ) 
        ""
        )
      }
} 