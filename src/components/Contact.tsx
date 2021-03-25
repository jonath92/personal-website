// external dependencies
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components/macro'
import Alert from 'react-bootstrap/Alert'


const FullPageWidthContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    width: 100%
`

const OuterContainer = styled.div`  
    width: 90%;
    max-width: 600px;

    div:first-child {
        margin-top: 0
    }
`


type SendingState = "unsend" | "pending" | "failed" | "succedd"

interface FormData {
    name: string,
    email: string,
    message: string
}

// needs some content in index.html to work!!
const Contact = () => {

    const [sendingState, setSendingState] = useState<SendingState>("unsend")
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
    const [formValidated, setFormValidated] = useState(false)


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        e.stopPropagation();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            setFormValidated(true)
            return
        }

        setSendingState("pending")
        setFormValidated(true)

        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })

        if (response.ok) {
            setSendingState('succedd')
            setFormData({ name: "", email: "", message: "" })
            return
        }

        setSendingState('failed')

    }

    function handleChange(change: Partial<FormData>) {
        const updatedValue = { ...formData, ...change }
        setFormData(updatedValue)
    }


    const encode = (data: any) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function renderNameInput() {
        return (
            <Form.Group className="mb-4">
                <Form.Control
                    placeholder="Name"
                    onChange={(e) => handleChange({ name: e.target.value })}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a name.
                </Form.Control.Feedback>
            </Form.Group>

        )
    }

    function renderMailInput() {
        return (
            <Form.Group className="mb-4">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={e => handleChange({ email: e.target.value })}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide an Email address.
                </Form.Control.Feedback>
            </Form.Group>

        )
    }

    function renderTextarea() {
        return (
            <Form.Group className="mb-4">
                <Form.Control
                    as="textarea"
                    className="mt-4"
                    rows={4}
                    placeholder="Leave a Comment"
                    onChange={e => handleChange({ message: e.target.value })}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a Comment
                </Form.Control.Feedback>
            </Form.Group>

        )
    }

    function renderAlert() {
        return (
            <>
                { (sendingState === "succedd" || sendingState === "failed") &&
                    <Alert
                        variant={
                            sendingState === 'succedd' ? 'success' : 'danger'
                        }
                        className="mt-4">
                        {
                            sendingState === 'succedd' ?
                                'Your message was sent sucessfully. I will reply to the provided email address as soon as possible.' :
                                "Message couldn't be send. Make sure you are connected to the internet and try again"
                        }

                    </Alert>
                }
            </>
        )
    }

    function renderButton() {
        return (
            <div
                style={{ display: "flex", width: "100%", flexDirection: "row-reverse" }}
            >
                <Button
                    type="submit"
                    className="mt-4"
                    size="lg"
                    disabled={sendingState === "pending"}
                >
                    {sendingState === "pending" ? "Loading..." : "Submit"}
                </Button>
            </div>)
    }


    return (
        <FullPageWidthContainer>
            <OuterContainer>

                <h4
                    style={{ textAlign: "center" }}
                    className="mb-5"
                >
                    Have a question or want to work together?
                </h4>

                <Form noValidate validated={formValidated} onSubmit={e => handleSubmit(e)}>
                    {renderNameInput()}
                    {renderMailInput()}
                    {renderTextarea()}

                    {renderAlert()}
                    {renderButton()}
                </Form>
            </OuterContainer>

        </FullPageWidthContainer>

    )
}

export { Contact }
