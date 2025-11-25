import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const nav = useNavigate();
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, pass);
      nav("/");
    } catch (error) {
      setErr(error.message);
    }
  };

  const google = async () => {
    try {
      await signInWithGoogle();
      nav("/");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <span style={styles.logo}>amazon.in</span>
      </div>

      <div style={styles.loginBox}>
        <h2 style={styles.signInTitle}>Sign in</h2>

        {err && <p style={styles.error}>{err}</p>}

        <form onSubmit={submit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email or mobile phone number</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={styles.continueButton}>
            Continue
          </button>
        </form>

        <p style={styles.termsText}>
          By continuing, you agree to Amazon's{" "}
          <button style={styles.link} onClick={() => alert("Terms clicked!")}>
            Conditions of Use
          </button>
        </p>

        {/* Separator (ONLY ONE KEY NOW) */}
        <div style={styles.separator}>
          <span style={styles.separatorText}>or</span>
        </div>

        <button onClick={google} style={styles.googleButton}>
          <div style={styles.googleButtonContent}>
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              style={styles.googleIcon}
            >
              <path
                fill="#4285F4"
                d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
              />
              <path
                fill="#34A853"
                d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
              />
              <path
                fill="#FBBC05"
                d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
              />
              <path
                fill="#EA4335"
                d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"
              />
            </svg>
            Sign in with Google
          </div>
        </button>

        <div style={styles.divider}></div>

        <div style={styles.footerLinks}>
          <button style={styles.footerLink}>Conditions of Use</button>
          <button style={styles.footerLink}>Privacy Notice</button>
          <button style={styles.footerLink}>Help</button>
        </div>

        <div style={styles.businessSection}>
          <p style={styles.businessText}>Buying for work?</p>
          <button style={styles.businessLink}>Shop on Amazon Business</button>
        </div>
      </div>

      {/* Signup section */}
      <div style={styles.newToAmazon}>
        <div style={styles.newSeparator}>
          <span style={styles.newSeparatorText}>New to Amazon?</span>
        </div>

        <button
          style={styles.createAccountButton}
          onClick={() => nav("/signup")}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#fff",
    fontFamily: "'Amazon Ember', Arial, sans-serif",
    padding: "20px",
  },
  logoContainer: {
    marginBottom: "20px",
    width: "100%",
    maxWidth: "350px",
    textAlign: "center",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#111",
    fontStyle: "italic",
  },
  loginBox: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px 26px",
    width: "100%",
    maxWidth: "350px",
    marginBottom: "20px",
  },
  signInTitle: {
    fontSize: "28px",
    fontWeight: "400",
    marginBottom: "20px",
    color: "#111",
  },
  form: {
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "14px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#111",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #a6a6a6",
    borderRadius: "3px",
    fontSize: "13px",
    boxSizing: "border-box",
    height: "31px",
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#FFD814",
    border: "1px solid #FCD200",
    borderRadius: "8px",
    padding: "8px 10px",
    fontSize: "13px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  termsText: {
    fontSize: "12px",
    color: "#111",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  link: {
    color: "#0066c0",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    padding: 0,
  },

  /* FIXED: ONLY ONE separator + separatorText */
  separator: {
    position: "relative",
    textAlign: "center",
    margin: "20px 0",
    borderTop: "1px solid #e7e7e7",
  },

  separatorText: {
    position: "absolute",
    top: "-8px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    padding: "0 10px",
    fontSize: "12px",
    color: "#767676",
  },

  googleButton: {
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid #a6a6a6",
    borderRadius: "4px",
    padding: "8px 10px",
    fontSize: "13px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  googleButtonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  googleIcon: {
    marginRight: "5px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e7e7e7",
    marginBottom: "14px",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  footerLink: {
    fontSize: "11px",
    color: "#0066c0",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  businessSection: {
    textAlign: "center",
  },
  businessText: {
    fontSize: "13px",
    color: "#111",
    marginBottom: "5px",
  },
  businessLink: {
    fontSize: "13px",
    color: "#0066c0",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  newToAmazon: {
    width: "100%",
    maxWidth: "350px",
    textAlign: "center",
  },
  newSeparator: {
    position: "relative",
    marginBottom: "20px",
    borderTop: "1px solid #e7e7e7",
  },
  newSeparatorText: {
    position: "absolute",
    top: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    padding: "0 10px",
    fontSize: "12px",
    color: "#767676",
  },
  createAccountButton: {
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid #a6a6a6",
    borderRadius: "4px",
    padding: "8px 10px",
    fontSize: "13px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "15px",
    textAlign: "center",
  },
};
