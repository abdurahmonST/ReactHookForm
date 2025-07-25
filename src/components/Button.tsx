import type { ReactNode } from "react"

interface ButtonProps {
    children?: ReactNode,
    text?: string,
    variant?: "primary" | "secondary",
}

const Button = (props: ButtonProps) => {
  const { children, text, variant="primary" } = props

  return (
    <button className={"btn" + variant}>
        {children || text}
    </button>
  )
}

export default Button
