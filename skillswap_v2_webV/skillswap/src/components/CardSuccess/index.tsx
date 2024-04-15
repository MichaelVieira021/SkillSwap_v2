import { enqueueSnackbar } from "notistack";

export function CardSuccess(mensagem: String) {
  return (
    enqueueSnackbar(
      <div>
        <p>{mensagem}</p>
      </div>,
      { variant: "success", anchorOrigin: { vertical: 'top', horizontal: 'right' } }
    ))
} 