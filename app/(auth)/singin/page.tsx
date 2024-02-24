import Btn from "@/components/Btn";
import { login } from "@/lib/actions/auth.action";

const page = async () => {
  return (
    <form
      className="w-3/4 min-w-[312px] sm:w-[480px] md:w-[530px] mx-auto border p-7 rounded-2xl shadow-2xl form bg-white bg-opacity-30"
      action={login}
    >
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">Sign in</h2>
      </div>

      {/* email field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-white text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* password field */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-white text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <Btn title={"Sign in"} />
    </form>
  );
};

export default page;
