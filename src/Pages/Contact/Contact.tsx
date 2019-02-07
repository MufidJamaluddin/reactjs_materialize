import * as React from "react";
import { Page } from '../Page';
import { Form, FieldForm } from '../../Components/Materialize';

/**
 * Halaman Contact
 * @author Mufid Jamaluddin
 */
class Contact extends Page
{
    protected title:string = "Contact";

    public render() : JSX.Element
    {
        return (
            <div className="row">
                <div className="col s6">
                    <h1>Contact Page</h1>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>                
                </div>
                <div className="col s6">
                    <Form>
                        <FieldForm name="email" type="email" label="Email" success="Valid" error="The Email Format is Wrong"></FieldForm>
                        <FieldForm name="message" type="text" label="Message"></FieldForm>
                        <div className="col s12">
                            <button className="waves-effect waves-light btn" type="submit">Send</button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Contact;