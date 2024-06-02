import './styles/footer.css'

export default function Footer() {
  return (
    <>
    <footer id="footer">
      <div id='footer_main'>
        <div className="row">
          <div className="col-md-3">
            <h4>LinkUp</h4>
            <p>The last team chat you</p> <p>will ever need.</p>
          </div>
          <div className="col-md-3">
            <h4>Help</h4>
            <ul>
              <li><a href="/">Support</a></li>
              <li><a href="/">Knowledgebase</a></li>
              <li><a href="/">Tutorials</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Features</h4>
            <ul>
              <li><a href="/">Screen Sharing</a></li>
              <li><a href="/">Mobile Apps</a></li>
              <li><a href="/">File Sharing</a></li>
              <li><a href="/">User Management</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <h4>Copyright LinkUp-Chat Inc.</h4>
      </div>
    </footer>
    </>
  );
}
