import React,{useState}from "react";
import classnames from "classnames";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Button,
    Form,
    FormGroup,
    Label,
    Modal
  } from "reactstrap";

function FormLogin(props) {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    return(
        <Modal
            modalClassName="modal-black"
            isOpen={props.formModal}
            toggle={() => props.setFormModal(false)}
        >
            <div className="modal-header justify-content-center">
                <button className="close" onClick={() => props.setFormModal(false)}>
                    <i className="fas fa-times"></i>
                </button>
                <div className="text-muted text-center ml-auto mr-auto">
                    <h3 className="mb-0">Sign in with</h3>
                </div>
            </div>
            <div className="modal-body">
                <div className="btn-wrapper text-center">
                    <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <img
                            alt="..."
                            src={require("../../assets/img/github.svg").default}
                        />
                    </Button>
                    <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <img
                            alt="..."
                            src={require("../../assets/img/google.svg").default}
                        />
                    </Button>
                </div>
                <div className="text-center text-muted mb-4 mt-3">
                    <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                    <FormGroup className="mb-3">
                        <InputGroup
                            className={classnames("input-group-alternative", {
                            "input-group-focus": emailFocus,
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-at"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                            placeholder="Email"
                            type="email"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup
                            className={classnames("input-group-alternative", {
                            "input-group-focus": passwordFocus,
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-key"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Password"
                                type="password"
                                onFocus={(e) => setPasswordFocus(true)}
                                onBlur={(e) => setPasswordFocus(false)}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup check className="mt-3">
                        <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                                Remember me!
                        </Label>
                    </FormGroup>
                    <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                            Sign in
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>            
    )
}
export default FormLogin;