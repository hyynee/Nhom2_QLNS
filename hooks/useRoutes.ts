import { usePathname } from "@/node_modules/next/navigation";
import { useMemo } from "react";



const useRoutes = () => {

    const pathname = usePathname()

    const routes = useMemo(() => {
        return [
            {
                path: '/authentication',
                title: 'Authentication',
                active: pathname === '/authentication'
            },
            {
                path: '/admins',
                title: 'Admin',
                active: pathname === '/admins'
            },
            {
                path: '/admins/employees',
                title: 'Admin',
                active: pathname === '/admins/employees'
            },
            {
                path: '/admins/employees/add',
                title: 'Admin',
                active: pathname === '/admins/employees/add'
            },
            {
                path: '/admins/employees/nations',
                title: 'Admin',
                active: pathname === '/admins/employees/nations'
            },
            {
                path: '/admins/employees/degrees',
                title: 'Admin',
                active: pathname === '/admins/employees/degrees'
            },
            {
                path: '/admins/departments',
                title: 'AdminDepartments',
                active: pathname === '/admins/departments'
            },
            {
                path: '/admins/projects',
                title: 'AdminProjects',
                active: pathname === '/admins/projects'
            },
            {
                path: '/admins/positions',
                title: 'AdminPositions',
                active: pathname === '/admins/positions'
            },
            {
                path: '/admins/salaries/board',
                title: 'AdminSalaries',
                active: pathname === '/admins/salaries/board'
            },
            {
                path: '/admins/salaries',
                title: 'AdminSalaries',
                active: pathname === '/admins/salaries'
            },
            {
                path: '/admins/rewards',
                title: 'AdminRewards',
                active: pathname === '/admins/rewards'
            },
            {
                path: '/admins/rewards/employees',
                title: 'Admin',
                active: pathname === '/admins/rewards/employees'
            },
            {
                path: '/admins/rewards/kindOfReward',
                title: 'Admin',
                active: pathname === '/admins/rewards/kindOfReward'
            },
            {
                path: '/admins/disciplines',
                title: 'Admin',
                active: pathname === '/admins/disciplines'
            },
            {
                path: '/admins/disciplines/kindOfDiscipline',
                title: 'Admin',
                active: pathname === '/admins/disciplines/kindOfDiscipline'
            },
            {
                path: '/admins/disciplines/employees',
                title: 'Admin',
                active: pathname === '/admins/disciplines/employees'
            },
            {
                path: '/admins/accounts',
                title: 'AdminAccounts',
                active: pathname === '/admins/accounts'
            },
            {
                path: '/users',
                title: 'User',
                active: pathname === '/users'
            },
            {
                path: '/users/departments',
                title: 'UserDepartments',
                active: pathname === '/users/departments'
            },
            {
                path: '/users/projects',
                title: 'UserProjects',
                active: pathname === '/users/projects'
            },
            {
                path: '/users/rewards',
                title: 'UserRewards',
                active: pathname === '/users/rewards'
            },
            {
                path: '/users/disciplines',
                title: 'UserDisciplines',
                active: pathname === '/users/disciplines'
            },
            {

                path: '/logout',
                title: 'Logout',
                active: pathname === 'logout'

            }
        ]
    }, [])
}

export default useRoutes;