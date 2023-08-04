import styled from "@emotion/styled";
import palette from "../../constants/palette";
import { css } from "@emotion/react";

export interface ITypographyBlockProps {
  type?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
  gutter?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  align?: "left" | "center" | "right";
  asterisk?: boolean;
  asteriskSize?: number;
  bold?: boolean;
  medium?: boolean;
  inline?: boolean;
  color?: keyof typeof palette;
  underline?: boolean;
}

export interface ITypographyProps extends ITypographyBlockProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}

interface ITextProps extends ITypographyProps {
  hover?: boolean;
}
interface ITextBlockProps extends Omit<ITypographyBlockProps, "type"> {
  hover?: boolean;
  type?: ITypographyProps["type"] | "quaternary" | "quinary";
}

const TextBlock = styled.span<ITextBlockProps>`
  display: block;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;

  ${({ type }) =>
    type === "primary" &&
    css`
      font-size: 16px;
      letter-spacing: -1px;
    `}
  ${({ type }) =>
    type === "secondary" &&
    css`
      font-size: 14px;
      letter-spacing: -0.5px;
    `}
  ${({ type }) =>
    type === "tertiary" &&
    css`
      font-size: 12px;
      letter-spacing: -0.5px;
    `}
  ${({ type }) =>
    type === "quaternary" &&
    css`
      font-size: 10px;
      letter-spacing: -0.5px;
    `}
    ${({ type }) =>
    type === "quinary" &&
    css`
      font-size: 8px;
    `}

    

  ${({ gutter }) => {
    if (typeof gutter === "number") {
      return css`
        margin: ${gutter}px;
      `;
    }
    if (typeof gutter === "object") {
      return css`
        margin-top: ${gutter.top ? `${gutter.top}px` : 0};
        margin-bottom: ${gutter.bottom ? `${gutter.bottom}px` : 0};
        margin-left: ${gutter.left ? `${gutter.left}px` : 0};
        margin-right: ${gutter.right ? `${gutter.right}px` : 0};
      `;
    }
  }}

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-weight: 500;
    `}
    
  ${({ inline }) =>
    inline &&
    css`
      display: inline;
    `}

  ${({ asterisk }) =>
    asterisk &&
    css`
      &::before {
        content: "*";
        color: ${palette.PRIMARY50};
      }
    `}

  ${({ asteriskSize }) =>
    asteriskSize !== undefined &&
    css`
      &::before {
        font-size: ${asteriskSize + "px"};
      }
    `}

  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}
    
  ${({ color }) =>
    color &&
    css`
      color: ${palette[color]};
    `}

    span.primary {
    color: ${palette.PRIMARY50};
  }

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}

  ${({ hover }) =>
    hover &&
    css`
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    `}
`;

const Typography = ({
  children,
  type = "primary",
  gutter,
  align,
  color,
  bold,
  medium,
  inline,
  asterisk = false,
  className,
  style,
  underline,
  hover,
  onClick,
}: ITextProps) => {
  return (
    <TextBlock
      type={type}
      gutter={gutter}
      align={align}
      color={color}
      bold={bold}
      medium={medium}
      inline={inline}
      asterisk={asterisk}
      className={className}
      style={style}
      underline={underline}
      onClick={onClick}
      hover={hover}
    >
      {children}
    </TextBlock>
  );
};

export default Typography;
