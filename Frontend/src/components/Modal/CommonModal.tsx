import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../ui/alert-dialog";
import { useState } from "react";

type CommonModalProps = { message: any };

export default function CommonModal({ message }: CommonModalProps) {
  const [dialog, setDialog] = useState(message.status);
  return (
    <div>
      <AlertDialog open={dialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>{message.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setDialog(false);
              }}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
