import HomeLayout from "../Layouts/HomeLayout";

function SignUp()
{
      return (
        
       <HomeLayout>
        <div className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow">
        <form>
            <h1 className="text-center text-2xl font-bold">
                Registration Page
            </h1>
        </form>
        </div>
       </HomeLayout>

        
      )
}

export default SignUp;
