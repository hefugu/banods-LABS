export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>Banods LABS</strong>
          <div>Discord Community Design / Bot Development / Operations</div>
        </div>
        <div>© {new Date().getFullYear()} Banods LABS. All rights reserved.</div>
      </div>
    </footer>
  );
}