module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'c01531060819661473859@sandbox.pagseguro.com.br',
    email: 'flavioa.tobias@gmail.com',
    token: '979B5BF7614C4726BBACD05F5C6A4350',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}