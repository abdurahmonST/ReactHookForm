import type { ReactNode } from "react"

interface ButtonProps {
    children?: ReactNode,
    text?: string,
    variant?: "primary" | "secondary",
    onClick?: () => void,
}

const Button = (props: ButtonProps) => {
  const { children, text, variant="primary", onClick } = props

  return (
    <button className={"btn" + variant} onClick={onClick}>
        {children || text}
    </button>
  )
}

export default Button
