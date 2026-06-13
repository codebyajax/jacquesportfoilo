"use client"

import styled from 'styled-components';

interface InputProps {
    onSend?: (message: string) => void;
    onFileChange?: (file: File) => void;
}

const Input = ({ onSend, onFileChange }: InputProps) => {
    return (
        <StyledWrapper>
            <div className="messageBox">
                <div className="fileUploadWrapper">
                    <label htmlFor="file">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                            <circle strokeWidth={20} stroke="currentColor" fill="none" r="158.5" cy="168.5" cx="168.5" />
                            <path strokeLinecap="round" strokeWidth={25} stroke="currentColor" d="M167.759 79V259" />
                            <path strokeLinecap="round" strokeWidth={25} stroke="currentColor" d="M79 167.138H259" />
                        </svg>
                        <span className="tooltip">Add an image</span>
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={(e) => e.target.files?.[0] && onFileChange?.(e.target.files[0])}
                    />
                </div>
                <input
                    required
                    placeholder="Message..."
                    type="text"
                    id="messageInput"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                            onSend?.(e.currentTarget.value);
                            e.currentTarget.value = '';
                        }
                    }}
                />
                <button
                    id="sendButton"
                    type="button"
                    onClick={(e) => {
                        const input = (e.currentTarget.parentElement as HTMLElement)
                            ?.querySelector<HTMLInputElement>('#messageInput');
                        if (input?.value.trim()) {
                            onSend?.(input.value);
                            input.value = '';
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                        <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" />
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="33.67" stroke="currentColor" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" />
                    </svg>
                </button>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .messageBox {
    width: fit-content;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--surface);
    padding: 0 var(--spacing-md);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line-color);
    transition: border-color var(--transition-fast);
  }

  .dark .messageBox,
  :global(.dark) & .messageBox {
    background-color: var(--dark-cont-bg, #2d2d2d);
    border-color: var(--dark-border);
  }

  .messageBox:focus-within {
    border-color: var(--mutedForeground-color);
  }

  .fileUploadWrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mutedForeground-color);
  }

  #file {
    display: none;
  }

  .fileUploadWrapper label {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: var(--mutedForeground-color);
    transition: color var(--transition-fast);
  }

  .fileUploadWrapper label svg {
    height: 1.125rem;
  }

  .fileUploadWrapper label svg path,
  .fileUploadWrapper label svg circle {
    transition: all var(--transition-med);
  }

  .fileUploadWrapper label:hover {
    color: var(--text-color);
  }

  .fileUploadWrapper label:hover svg circle {
    fill: var(--line-color);
  }

  .fileUploadWrapper label:hover .tooltip {
    display: block;
    opacity: 1;
  }

  .tooltip {
    position: absolute;
    top: -2.5rem;
    display: none;
    opacity: 0;
    color: var(--text-bright);
    font-size: var(--font-size-xs);
    text-wrap: nowrap;
    background-color: var(--bg-black);
    padding: 6px 10px;
    border: 1px solid var(--line-color);
    border-radius: var(--radius-sm);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    transition: all var(--transition-med);
  }

  #messageInput {
    width: 12.5rem;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    padding-left: var(--spacing-sm);
    color: var(--text-color);
    font-family: inherit;
    font-size: var(--font-size-base);
  }

  #messageInput::placeholder {
    color: var(--mutedForeground-color);
  }

  #messageInput:focus ~ #sendButton svg path,
  #messageInput:valid ~ #sendButton svg path {
    fill: var(--line-color);
    stroke: var(--text-color);
  }

  #sendButton {
    width: fit-content;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--mutedForeground-color);
    transition: color var(--transition-fast);
  }

  #sendButton svg {
    height: 1.125rem;
    transition: all var(--transition-med);
  }

  #sendButton svg path {
    transition: all var(--transition-med);
  }

  #sendButton:hover {
    color: var(--text-color);
  }

  #sendButton:hover svg path {
    fill: var(--line-color);
    stroke: var(--text-color);
  }
`;

export default Input;