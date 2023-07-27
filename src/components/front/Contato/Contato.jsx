import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contato = () => {
  return (
    <div className='Container ' style={{ marginTop: '35px' }}>
         <main className="flex-fill">
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={8} lg={6}>
            <h1>Fale Conosco</h1>

            <Form>
              <Form.Group className="mb-3" controlId="txtNomeCompleto">
                <Form.Label className='NomeCompleto'style={{ marginTop: '38px' }}>Nome Completo</Form.Label>
                <Form.Control type="text" placeholder=" " autoFocus />
              </Form.Group>

              <Form.Group className="mb-3" controlId="txtEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder=" " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="txtMensagem">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder=" " />
              </Form.Group>

              <Button variant="btn btn-primary " size="lg">
                Enviar Mensagem
              </Button>
            </Form>

            <p className="mt-3">
              Faremos nosso melhor para responder sua mensagem em até 2 dias úteis.
            </p>

            <p className="mt-3">
              Atenciosamente,<br />
              Central de Relacionamento do Cliente
            </p>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Contato