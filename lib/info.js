module.exports = {
  info: (method, url) => {
    var d = new Date();
    var day = d.toISOString().slice(0, 10);
    var time = d.toString().slice(16, 24);
    return console.log(`${day} ${time} | ${method} from ${url}`)
  }
}