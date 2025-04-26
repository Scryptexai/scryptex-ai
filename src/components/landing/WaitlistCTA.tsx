import { useState } from "react";
import { joinWaitlist } from "@/services/api";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [copySuccess, setCopySuccess] = useState(""); // State untuk umpan balik penyalinan

  const handleSubmit = async () => {
    if (!email || !username) return;
    setLoading(true);
    const ref = new URLSearchParams(window.location.search).get("ref");

    try {
      const res = await joinWaitlist({ email, username, ref: ref || undefined });
      setReferralLink(`${window.location.origin}/?ref=${res.data.referral_code}`);
      setJoined(true);
    } catch (err) {
      console.error("Waitlist error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopySuccess("Referral link copied to clipboard!"); // Berikan umpan balik sukses
      setTimeout(() => setCopySuccess(""), 3000); // Hapus pesan setelah 3 detik
    } catch (err) {
      console.error("Failed to copy referral link:", err);
      setCopySuccess("Failed to copy referral link."); // Berikan umpan balik gagal
      setTimeout(() => setCopySuccess(""), 3000); // Hapus pesan setelah 3 detik
    }
  };

  return (
    <div
      id="waitlist" // Tambahkan ID untuk memungkinkan scroll ke elemen ini
      className="p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-md w-full max-w-xl mx-auto mt-10 text-center"
    >
      {!joined ? (
        <>
          <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-lg opacity-90 mb-6">
            Be the first to access Scryptex AI and earn <strong>5 TEX</strong> for every successful referral. Use TEX to unlock premium features and maximize your Web3 opportunities.
          </p>
          <input
            className="mb-3 w-full p-3 border border-gray-300 rounded text-black"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="mb-4 w-full p-3 border border-gray-300 rounded text-black"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={`w-full py-3 rounded font-medium ${
              loading ? "bg-gray-400" : "bg-white text-blue-700 hover:bg-gray-100"
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Now"}
          </button>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">You're In! 🎉</h2>
          <p className="text-lg opacity-90 mb-6">
            Share your referral link to earn more TEX and climb the leaderboard. The more you refer, the more rewards you unlock!
          </p>
          <div className="bg-white text-black rounded p-3 mb-4 text-sm break-all">{referralLink}</div>
          <button
            className="bg-white border border-blue-700 text-blue-700 px-4 py-2 rounded font-medium hover:bg-gray-100"
            onClick={handleCopy}
          >
            Copy Referral Link
          </button>
          {copySuccess && <p className="text-sm mt-2">{copySuccess}</p>} {/* Tampilkan pesan umpan balik */}
        </>
      )}
    </div>
  );
}