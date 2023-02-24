import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const StudentApi = createApi({
	reducerPath: 'student',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:1337/api/'
	}),
	tagTypes: ['student'],
	endpoints(build) {
		return {
			getStudents: build.query({
				query(arg) {
					return 'students';
				},
				transformResponse(baseQueryReturnValue, meta, arg) {
					return baseQueryReturnValue.data;
				},
				keepUnusedDataFor: 60,
				providesTags: [{type: 'student', id: 'LIST'}]
			}),
			getStudentById: build.query({
				query(id) {
					return `students/${id}`;
				},
				transformResponse(baseQueryReturnValue, meta, arg) {
					return baseQueryReturnValue.data;
				},
				keepUnusedDataFor: 60,
				providesTags: (result, error, id) => [{type: 'student', id}]
			}),
			delStudentById: build.mutation({
				query(id) {
					return {
						url: `students/${id}`,
						method: 'delete'
					};
				},
				invalidatesTags: [{type: 'student', id: 'LIST'}]
			}),
			addStudent: build.mutation({
				query(stu) {
					return {
						url: 'students',
						method: 'post',
						body: {
							data: stu
						}
					};
				},
				invalidatesTags: [{type: 'student', id: 'LIST'}]
			}),
			updateStudent: build.mutation({
				query(stu) {
					return {
						url: `students/${stu.id}`,
						method: 'put',
						body: {
							data: stu.attributes
						}
					};
				},
				invalidatesTags: (result, error, stu) => [{type: 'student', id: stu.id}, {type: 'student', id: 'LIST'}]
			})


		};
	}
});

/*
	Api对象创建之后，Api对象会根据各种方法自动生成对应的钩子函数
		通过这些钩子函数可以向服务器发送请求
		钩子函数命名规则: getStudents ------>  useGetStudentsQuery
 */


export const {useGetStudentsQuery, useGetStudentByIdQuery, useDelStudentByIdMutation, useAddStudentMutation, useUpdateStudentMutation} = StudentApi;

export default StudentApi;