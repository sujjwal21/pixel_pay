
import { Handle, HandleProps } from "reactflow";

export default function CustomHandle(props: HandleProps) {
  return (
    <Handle
      style={{
        width: 6,
        height: 6,
        background: "blue",
        border: "1px solid black",
      }}
      {...props}
    />
  );
}
